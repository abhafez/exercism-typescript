class LogLineParser
  attr_reader :message, :log_level

  def initialize(line)
    m = /\[(?<log_level>[A-Z]+)\]:\s*(?<message>[\w| ]+\b)/.match(line)

    @message = m[:message]
    @log_level = m[:log_level].downcase
  end

  def reformat
    "#{@message} (#{@log_level})"
  end
end
