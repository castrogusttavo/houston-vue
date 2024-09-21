
<template>
  <Icon :iconName="'preference-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PreferenceHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'preference-horizontal'
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
