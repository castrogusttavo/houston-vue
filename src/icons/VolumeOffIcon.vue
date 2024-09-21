
<template>
  <Icon :iconName="'volume-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-off'
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
