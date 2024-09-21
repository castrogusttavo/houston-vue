
<template>
  <Icon :iconName="'computer-phone-sync'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerPhoneSyncIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-phone-sync'
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
