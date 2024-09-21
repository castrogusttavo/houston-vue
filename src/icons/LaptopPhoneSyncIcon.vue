
<template>
  <Icon :iconName="'laptop-phone-sync'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopPhoneSyncIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-phone-sync'
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
