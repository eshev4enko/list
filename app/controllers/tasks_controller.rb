class TasksController < ApplicationController
  protect_from_forgery except: :create
  before_action :set_project, only: %i[create update destroy complete show edit]
  before_action :set_task, only: %i[update destroy complete show edit]

  def edit
    redirect_to projects_path
  end

  def create
    @task = @project.tasks.create(task_params)
    redirect_to projects_path
  end

  def update
    @task.update(task_params)
    redirect_to projects_path
  end

  def destroy
    @task.destroy
    redirect_to projects_path
  end

  def complete
    @task.update(completed: !@task.completed)
    @task.completed? ? true : false
    @task.save
    render json: { message: "Success" }
  end

  def sort
    @task = GlobalID::Locator.locate_signed(params[:sgid])
    @task.update(position: params[:position])
    render json: { message: "Success" }
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name)
  end
end
