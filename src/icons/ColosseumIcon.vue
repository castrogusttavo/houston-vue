
<template>
  <Icon :iconName="'colosseum'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ColosseumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'colosseum'
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
