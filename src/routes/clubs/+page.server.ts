import { supabase } from '$lib/supabase-client';

export async function load() {
	const { data: clubData } = await supabase.from('clubs').select()
  return {
    clubData,
  }
}
