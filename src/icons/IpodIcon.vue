
<template>
  <Icon :iconName="'ipod'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IpodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ipod'
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
