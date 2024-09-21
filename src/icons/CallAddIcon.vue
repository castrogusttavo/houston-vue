
<template>
  <Icon :iconName="'call-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-add'
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
