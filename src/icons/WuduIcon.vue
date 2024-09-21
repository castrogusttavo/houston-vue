
<template>
  <Icon :iconName="'wudu'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WuduIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wudu'
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
