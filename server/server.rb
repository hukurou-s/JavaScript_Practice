require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pry-byebug'
require 'json'
require 'sinatra/cross_origin'

enable :cross_origin

get '/hello' do
  erb :hello
end


get '/json' do
  cross_origin
  data = {
    board: [
      ['black', 'black', 'black'],
      ['black', 'black', 'black'],
      ['black', 'black', 'black']
    ]
  }
#  binding.pry
  JSON.generate(data)
end
