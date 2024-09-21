
<template>
  <Icon :iconName="'tropical-storm-tracks-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TropicalStormTracks02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tropical-storm-tracks-02'
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
