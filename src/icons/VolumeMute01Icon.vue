
<template>
  <Icon :iconName="'volume-mute-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeMute01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-mute-01'
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
