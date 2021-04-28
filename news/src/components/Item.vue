<template>
  <div>
    <ul>
      <li>
        <!-- {{ itemname }} -->
        <slot name="title">
        </slot>
        <small>
          {{ itemname.time_ago }}
          <slot name='user'>
          </slot>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["itemname"],
};
</script>

<style>
</style>