
<template>
  <Icon :iconName="'table-tennis-bat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TableTennisBatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table-tennis-bat'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
