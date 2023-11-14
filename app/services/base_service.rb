class BaseService
  def self.method_missing(method_name, *args, **kwargs)
    self.new(**kwargs).public_send(method_name, *args)
  end
end