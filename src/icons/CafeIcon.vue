
<template>
  <Icon :iconName="'cafe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CafeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cafe'
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
