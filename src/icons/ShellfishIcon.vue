
<template>
  <Icon :iconName="'shellfish'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShellfishIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shellfish'
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
