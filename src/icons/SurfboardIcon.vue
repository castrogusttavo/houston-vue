
<template>
  <Icon :iconName="'surfboard'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SurfboardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'surfboard'
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
