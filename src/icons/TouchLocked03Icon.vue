
<template>
  <Icon :iconName="'touch-locked-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchLocked03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-locked-03'
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
