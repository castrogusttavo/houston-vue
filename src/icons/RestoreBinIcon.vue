
<template>
  <Icon :iconName="'restore-bin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RestoreBinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'restore-bin'
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
