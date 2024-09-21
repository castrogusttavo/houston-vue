
<template>
  <Icon :iconName="'home-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HomeWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-wifi'
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
