
<template>
  <Icon :iconName="'mute'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MuteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mute'
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
