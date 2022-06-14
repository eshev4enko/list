class ProjectsController < ApplicationController
  before_action :set_project, only: %i[update destroy show edit]

  def index
    @project = Project.new
    @projects = Project.order(created_at: :asc).all
    @task = @project.tasks.new
  end

  def create
    @project = Project.create(title: "Enter the title...")
    redirect_to projects_path
  end

  def update
    @project.update(project_params)
    redirect_to projects_path
  end

  def destroy
    @project.destroy
    redirect_to projects_path
  end

  def new
    @project = Project.new
    redirect_to projects_path
  end

  private

  def project_params
    params.require(:project).permit(:title)
  end

  def set_project
    @project = Project.find(params[:id])
  end
end
