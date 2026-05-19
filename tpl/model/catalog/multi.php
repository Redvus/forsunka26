<?php
class ModelCatalogMulti extends Model {
	public function getMulti($product_id) {
		$multi = array();
		$html = "
		<table class='stock bt' >";
		$query = $this->db->query('SHOW TABLES LIKE \'1c_mart_product_stock\'');
        if ($query->rows) {

		$query = $this->db->query("SELECT  s.*, p.stock FROM 1c_mart_product_stock AS p LEFT JOIN 1c_mart_storage AS s ON s.id_storage = p.id_storage WHERE p.id_product = " . (int)$product_id);
	    $multi = $query->rows;
		foreach ($multi as $m) {
		if (!empty($m['nick'])) $name = stripslashes($m['nick']); else $name = stripslashes($m['name_storage']);
		if ($m['stock'] > 0 ) $stock = "<span>".$m['stock']." шт.</span><span>&nbsp;";
		else $stock = "<span class='sklad_empty'>Отсутствует</span>";
		$html .= "<tr><td><span>".$name."</span></td><td rowspan='2' class='st'>".$stock."</td></tr>";
		$html .= "<tr class='bb'><td>".stripslashes($m['desc_storage'])."</td></tr>";
		}
		$html .= "</table>";
		}
		if (count($multi) > 0 )
		return $html;
	   else return '';
	}

}
?>

