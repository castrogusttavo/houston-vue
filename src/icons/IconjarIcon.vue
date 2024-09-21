
<template>
  <Icon :iconName="'iconjar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IconjarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'iconjar'
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
