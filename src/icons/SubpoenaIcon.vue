
<template>
  <Icon :iconName="'subpoena'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SubpoenaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'subpoena'
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
