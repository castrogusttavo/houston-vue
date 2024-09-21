
<template>
  <Icon :iconName="'discord'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiscordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'discord'
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
