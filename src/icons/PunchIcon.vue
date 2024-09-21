
<template>
  <Icon :iconName="'punch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PunchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'punch'
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
