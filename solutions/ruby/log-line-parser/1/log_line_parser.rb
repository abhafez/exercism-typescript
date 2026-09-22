class LogLineParser
  def initialize(line)
    @split = line.split(': ')
  end

  def message
    @split[1].strip
  end

  def log_level
    @split[0].gsub(/[\[\]]/, '').downcase
  end

  def reformat
    "#{message} (#{log_level})"
  end
end
