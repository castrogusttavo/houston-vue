
<template>
  <Icon :iconName="'volume-mute-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeMute02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-mute-02'
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
