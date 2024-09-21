
<template>
  <Icon :iconName="'hot-air-balloon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HotAirBalloonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hot-air-balloon'
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
