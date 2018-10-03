json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids
end

json.items do
  @pokemon.items.each do |item|
    json.partial! 'api/pokemon/items', item: item, id: item.id
  end
end
