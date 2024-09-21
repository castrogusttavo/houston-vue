
<template>
  <Icon :iconName="'volume-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-up'
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
