
<template>
  <Icon :iconName="'master-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MasterCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'master-card'
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
