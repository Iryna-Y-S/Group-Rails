json.array!(@groups) do |group|
  json.extract! group, :id, :number_of_student
  json.url group_url(group, format: :json)
end
