
<template>
  <Icon :iconName="'volume-high'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeHighIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-high'
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
