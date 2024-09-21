
<template>
  <Icon :iconName="'kettle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KettleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kettle'
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
