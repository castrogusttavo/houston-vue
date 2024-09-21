
<template>
  <Icon :iconName="'twitch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwitchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'twitch'
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
