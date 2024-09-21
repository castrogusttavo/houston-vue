
<template>
  <Icon :iconName="'table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table'
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
