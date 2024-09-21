
<template>
  <Icon :iconName="'allah'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AllahIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'allah'
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
