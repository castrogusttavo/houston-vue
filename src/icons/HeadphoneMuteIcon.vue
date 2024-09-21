
<template>
  <Icon :iconName="'headphone-mute'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeadphoneMuteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'headphone-mute'
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
