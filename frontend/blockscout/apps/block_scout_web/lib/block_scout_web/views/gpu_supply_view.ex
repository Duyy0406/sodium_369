defmodule BlockScoutWeb.GpuSupplyView do
  use BlockScoutWeb, :view

  alias BlockScoutWeb.AccessHelper

  alias Number

  def network_display_name(config), do: config[:network_name] || "Local Network"

  def show_config_warnings?(config) do
    is_nil(config[:contract_address]) or is_nil(config[:rpc_endpoint])
  end

  def config_warnings(config) do
    warnings = []
    warnings = if is_nil(config[:contract_address]), do: ["'contract_address' is not set"], else: warnings
    warnings = if is_nil(config[:rpc_endpoint]), do: ["'rpc_endpoint' is not set"], else: warnings
    warnings
  end

  def gpu_value_class(total_gpu_supply) do
    cond do
      is_nil(total_gpu_supply) -> "text-muted"
      total_gpu_supply > 0 -> "text-success"
      true -> "text-danger"
    end
  end

  def status_class(config) do
    cond do
      is_nil(config[:contract_address]) -> "status-dot-warning"
      is_nil(config[:rpc_endpoint]) -> "status-dot-warning"
      true -> "status-dot-success"
    end
  end

  def status_text(config) do
    cond do
      is_nil(config[:contract_address]) -> "Not Configured"
      is_nil(config[:rpc_endpoint]) -> "Not Configured"
      true -> "Connecting..."
    end
  end

  def has_initial_data?(data), do: not is_nil(data)

  def format_gpu_count(count) when is_integer(count), do: Number.to_string(count, commas: true)
  def format_gpu_count(_), do: "N/A"

  def format_timestamp(timestamp) when is_integer(timestamp) do
    timestamp
    |> DateTime.from_unix!(:millisecond)
    |> DateTime.to_naive()
    |> NaiveDateTime.to_string()
  end
  def format_timestamp(_), do: "N/A"

  def format_contract_address(address), do: AccessHelper.truncate_address(address)

  def contract_explorer_link(config) do
    "#{config[:explorer_url]}/address/#{config[:contract_address]}"
  end

  def format_block_number(block_number), do: Number.to_string(block_number, commas: true)

  def refresh_interval_seconds(config) do
    div(config[:refresh_interval_ms], 1000)
  end

  # Helper to serialize configuration for JavaScript
  def dashboard_config_json(config), do: Poison.encode!(config)
  def initial_data_json(data), do: Poison.encode!(data)
end
