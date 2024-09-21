
<template>
  <Icon :iconName="'spotify'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpotifyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spotify'
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
