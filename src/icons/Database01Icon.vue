
<template>
  <Icon :iconName="'database-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Database01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-01'
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
