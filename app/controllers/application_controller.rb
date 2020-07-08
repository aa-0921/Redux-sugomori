# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # private
  # def after_sign_out_path_for(resource_or_scope)
  #   root_path
  # end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_in, keys: [:name])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

  def after_sign_out_path_for(scope)
    root_path
  end

  # def after_sign_out_path_for(resource)
  #   p "after_sign_out_path_for"
  #   root_path
  #   # new_user_session_path
  # end
end
