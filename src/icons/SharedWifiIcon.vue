
<template>
  <Icon :iconName="'shared-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SharedWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shared-wifi'
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
