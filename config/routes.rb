Rails.application.routes.draw do
  resources :projects do
    resources :tasks do
      put :complete, on: :member
      put :sort, on: :collection
    end
  end

  root "projects#index"
end
