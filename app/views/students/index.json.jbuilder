json.array!(@students) do |student|
  json.extract! student, :id, :name, :gender, :skype
  json.url student_url(student, format: :json)
end
