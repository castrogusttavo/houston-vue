
<template>
  <Icon :iconName="'volume-low'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeLowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-low'
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
