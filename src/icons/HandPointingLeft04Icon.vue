
<template>
  <Icon :iconName="'hand-pointing-left-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPointingLeft04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-pointing-left-04'
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
