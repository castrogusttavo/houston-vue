
<template>
  <Icon :iconName="'football'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FootballIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'football'
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
