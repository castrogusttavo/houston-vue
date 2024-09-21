
<template>
  <Icon :iconName="'ice-skating'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IceSkatingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ice-skating'
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
