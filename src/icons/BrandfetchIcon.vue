
<template>
  <Icon :iconName="'brandfetch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BrandfetchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'brandfetch'
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
